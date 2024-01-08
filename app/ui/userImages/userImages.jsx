import Image from "next/image";

const UserImages = () => {
  return (
    <div className="flex items-center justify-center gap-10">
      <div className="flex items-center justify-center">
        <UserImage filename={"1.jpg"} />
        <UserImage filename={"2.jpg"} />
        <UserImage filename={"3.jpg"} />
        <UserImage filename={"4.jpg"} />
        <UserImage filename={"5.jpg"} />
      </div>
      <div className="  hidden items-center justify-center gap-3 rounded-full bg-white p-[4px] pr-7 sm:flex ">
        <UserImage filename={"6.jpg"} intersection={false} border={false} />
        <div>
          <p>Wow, I saved $500!</p>
          <p className="text-xs">Jane Doe</p>
        </div>
      </div>
    </div>
  );
};

const UserImage = ({ filename, intersection = true, border = true }) => {
  return (
    <Image
      src={`/users/${filename}`}
      width={54}
      height={54}
      alt="user"
      priority="false"
      className={`${intersection ? "mr-[-22px]" : null} ${
        border ? "border-[4px]" : null
      }  rounded-full border-white`}
    />
  );
};

export default UserImages;
