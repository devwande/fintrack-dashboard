const avatars = [
  { name: "Ava", src: "/ava.svg" },
  { name: "Liam", src: "/liam.svg" },
  { name: "Random", src: "/random.svg" },
  { name: "Noah", src: "/noah.svg" },
];

const AvatarGroup = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar.src}
            alt={avatar.name}
            width={8} height={8}
            className="h-8 w-8 rounded-full border-2 border-white object-cover"
            
          />
        ))}
      </div>
      <span className="text-sm text-light-gray">
        Ava, Liam, Noah +12 others
      </span>
    </div>
  );
};

export default AvatarGroup;
