import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import "@css/artist.css";

async function ViewArtist({ params }: { params: { artistId: string } }) {
  const prisma = new PrismaClient();
  const id: number = parseInt(params.artistId);
  if (!id) {
    return <div>Artist ID not found.</div>;
  }

  const artist = await prisma.artists.findUnique({
    where: { id: id },
  });

  return (
    <>
      {artist?.id ? (
        <div className="view-artist-container flex flex-col gap-6">
          <div className="artist-image w-full">
            <Image
              alt={`${artist?.name}`}
              className="blur object-cover"
              src={require(`@public/images/artists/${artist?.id}.jpg`)}
              height={100}
              width={100}
            />
          </div>
        </div>
      ) : (
        <div className="content-not-found">
          <h1 className="font-black text-xl text-center">
            The Artist you are looking for is not on Meastro...Yet
          </h1>
        </div>
      )}
    </>
  );
}

export default ViewArtist;
