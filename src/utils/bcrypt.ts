import * as bcrypt from 'bcrypt';

export const HashingPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const VerifyPassword = async ({
  password,
  hashedPassword,
}: {
  password: string;
  hashedPassword: string;
}) => {
  return await bcrypt.compare(password, hashedPassword);
};
