import user from "../Database/UserSchema.js";
import bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
  // console.log("Signup called");
  const { username, email, mobile, address, password } = req.body;
  console.log(username);
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ Message: `Please Enter all credentials` });
    }

    const existingUser = await user.findOne({ email: email });

    if (existingUser) {
      return res.status(422).json({ Message: "User already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    const newUser = new user({
      username: username,
      email: email,
      mobile: mobile,
      address: address,
      password: hashedPassword,
    });

    console.log(newUser._id);

    await newUser.save();

    return res.status(200).json({ newUser });
  } catch (err) {
    return console.log(err);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ Message: "Please enter all credentials" });
    }

    const existingUser = await user.findOne({ email: email });

    if (!existingUser) {
      return res
        .status(404)
        .json({ Message: "User does not exist. Please register first." });
    }

    const existingUserPassword = bcrypt.compareSync(
      password,
      existingUser.password
    );

    if (!existingUserPassword) {
      return res.status(400).json({ Message: "Invalid Credentials" });
    }

    return res
      .status(200)
      .json({ id: existingUser._id, Message: "Login Success" });
  } catch (err) {
    return console.log(err);
  }
};
