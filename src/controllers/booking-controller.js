const { StatusCodes } = require("http-status-codes");

const { BookingService } = require("../services/index");

const bookingServices = new BookingService();

const create = async (req, res) => {
  try {
    const response = await bookingServices.createBooking(req.body);
    return res.status(StatusCodes.OK).json({
      message: "Completed booking",
      success: true,
      err: {},
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.OK).json({
      message: error.message,
      success: false,
      err: error.explanation,
      data: {},
    });
  }
};

module.exports = {
  create,
};
