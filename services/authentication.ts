import { EXPO_PUBLIC_API_URL } from "@/utils/constants";

export const registerWithGoogle = async (data: any): Promise<any> => {
  const response = await fetch(
    `${EXPO_PUBLIC_API_URL}/authentication/register/google`,
    {
      method: "POST",
      body: JSON.stringify(data),
    },
  );
  return response.json();
};
