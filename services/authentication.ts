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

export const updateUserGoogleById = async (
  id: string,
  data: any,
): Promise<any> => {
  const response = await fetch(`${EXPO_PUBLIC_API_URL}/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
  return response.json();
};
