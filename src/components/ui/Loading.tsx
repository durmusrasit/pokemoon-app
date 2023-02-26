import { Loader, LoadingOverlay } from "@mantine/core";

const Loading = () => {
  return (
    <LoadingOverlay overlayBlur={4} visible>
      <Loader />
    </LoadingOverlay>
  );
};

export default Loading;
