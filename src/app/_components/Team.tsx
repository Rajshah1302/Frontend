import Image from "next/image";
import img from "../../../public/placeholder.jpg";
const mockData = [
  {
    id: 1,
    name: "John Smith",
    designation: "Designation here",
    image: {img},
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    id: 2,
    name: "Elina Williams",
    designation: "Designation here",
    image: {img},
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    id: 3,
    name: "John Smith",
    designation: "Designation here",
    image: {img},
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
];

export default function Team() {
  return (
    <div className="max-w-6xl ml-10 bg-white rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Team</h1>
      <p className="text-muted-foreground mb-8">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit
        egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      <div className="space-y-4">
        {mockData.map((member) => (
          <div
            key={member.id}
            className="bg-blue-100 p-6 rounded-lg flex gap-8 items-start"
          >
            <div className="space-y-2">
              <Image
                src={img}
                alt={member.name}
                width={100}
                height={100}
                className="w-24 h-24 rounded-lg grayscale"
              />
              <div>
                <h2 className="font-medium">{member.name}</h2>
                <p className="text-sm text-muted-foreground">{member.designation}</p>
              </div>
            </div>
            <p className="text-muted-foreground flex-1">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

