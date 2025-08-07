const avatars = [
  { name: 'Ava', src: '/images/ava.jpg' },
  { name: 'Liam', src: '/images/liam.jpg' },
  { name: 'Noah', src: '/images/noah.jpg' },
]

const AvatarGroup = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex -space-x-2">
        {avatars.map((avatar, idx) => (
          <img
            key={idx}
            src={avatar.src}
            alt={avatar.name}
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">Ava, Liam, Noah +12 others</span>
    </div>
  )
}

export default AvatarGroup