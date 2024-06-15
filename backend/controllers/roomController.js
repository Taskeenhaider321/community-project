const roomModel = require("../models/roomModel");
const { getIdFromToken, checkAuthenticity } = require("./userController");
const mongoose = require("mongoose");

// Function to get rooms with recent 10 messages
const getRoomsWithRecentMessages = async (userId, type) => {
  try {
    const rooms = await roomModel.aggregate([
      { $match: { type: type, members: new mongoose.Types.ObjectId(userId) } },
      {
        $lookup: {
          from: "users",
          localField: "members",
          foreignField: "_id",
          as: "members",
        },
      },
      {
        $lookup: {
          from: "messages",
          let: { roomId: "$_id" },
          pipeline: [
            { $match: { $expr: { $eq: ["$room", "$$roomId"] } } },
            { $sort: { timestamp: -1 } },
            { $limit: 10 },
          ],
          as: "recentMessages",
        },
      },
      {
        $addFields: {
          latestMessage: { $arrayElemAt: ["$recentMessages", 0] },
        },
      },
      { $sort: { "latestMessage.timestamp": -1 } },
      { $project: { latestMessage: 0 } },
    ]);

    return rooms;
  } catch (error) {
    console.error("Error fetching rooms with recent messages:", error);
  }
};

module.exports.createRoom = async (req, res) => {
  try {
    console.log(req.body);
    const authenticated = checkAuthenticity(req.header("Authorization"));
    const currentUserId = await getIdFromToken(req.header("Authorization"));
    if (
      req.body.type === "personal" &&
      req.body.members.includes(currentUserId)
    ) {
      console.log("Room creation with yourself is not allowed.");
      return res
        .status(200)
        .json({ message: "Room creation with yourself is not allowed" });
    }
    console.log([...req.body.members, currentUserId]);
    const roomExist = await roomModel.findOne({
      type: "personal",
      members: { $all: [...req.body.members, currentUserId] }
    });
    console.log(roomExist);

    if (roomExist) {
      console.log("personal room already exist of these members");
      console.log(roomExist);
      return res
        .status(200)
        .json({ message: "room already exist with these members" });
    }
    if (authenticated) {
      console.log('creating room');
      const newRoom = new roomModel({
        ...req.body,
        members: [...req.body.members, currentUserId],
      });
      newRoom.save();
      res.status(200).json({ room: newRoom });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

module.exports.getPersonalRooms = async (req, res) => {
  try {
    const userId = await getIdFromToken(req.header("Authorization"));
    const personalRooms = await getRoomsWithRecentMessages(userId, "personal");

    res.status(200).json(personalRooms);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
