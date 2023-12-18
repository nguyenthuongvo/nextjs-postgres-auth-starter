import { getServerSession } from "next-auth/next";

export default async function AuthStatus() {
  const session = await getServerSession();
  return (
    <div className="absolute top-5 w-full flex justify-center items-center bg-green-50">
      {session && (
        <p className="text-sm">
          Đang đăng nhập với tài khoản {session.user?.email}
        </p>
      )}
    </div>
  );
}
