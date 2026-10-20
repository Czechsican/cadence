import { getImage } from "../../content/images";

const Image = ({ id, alt = "", loading = "lazy", ...rest }) => {
  const image = getImage(id);

  if (!image) return null;

  return (
    <img
      src={image.src}
      width={image.width}
      height={image.height}
      alt={alt}
      loading={loading}
      {...rest}
    />
  );
};

export default Image;
