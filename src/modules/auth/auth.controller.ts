import { catchAsync } from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";

const register = catchAsync(async (req, res) => {
  const result = await AuthServices.register(req.body);

  res.status(200).json({
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  const { accessToken, user } = await AuthServices.login(req.body);

  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    token: accessToken,
    date: user
  });
});

export const authControllers = {
  register,
  login,
};
