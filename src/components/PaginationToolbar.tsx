import {
  FirstPage,
  LastPage,
  NavigateBefore,
  NavigateNext,
} from "@mui/icons-material";
import { Button, ButtonProps, IconButton, Stack } from "@mui/material";

interface PaginationToolbarProps {
  pages: number;
  currentPage: number;
  frameSize?: number;
  hasNext: boolean;
  hasPrev: boolean;
  withFirstLast?: boolean;
  onNext: () => void;
  onPrev: () => void;
  onJump: (page: number) => void;
}
const PaginationToolbar = ({
  pages,
  currentPage,
  frameSize = 5,
  hasNext,
  hasPrev,
  withFirstLast = true,
  onNext,
  onPrev,
  onJump,
}: PaginationToolbarProps) => {
  const isBeforeFirstFrameHalf = currentPage < Math.floor(frameSize / 2);
  const isAfterLastFrameHalf =
    currentPage >= pages - frameSize + Math.floor(frameSize / 2);

  const size = "small";

  const calculateIndex = (index: number) => {
    if (isBeforeFirstFrameHalf) {
      return index;
    } else if (isAfterLastFrameHalf) {
      return pages - frameSize + index;
    } else {
      return currentPage - Math.floor(frameSize / 2) + index;
    }
  };

  return (
    <Stack
      alignSelf="flex-end"
      direction="row"
      spacing={1}
      justifyContent="center"
    >
      {withFirstLast && (
        <IconButton
          disabled={!hasPrev}
          onClick={() => onJump(0)}
          color="primary"
          size={size}
        >
          <LastPage fontSize={size} />
        </IconButton>
      )}

      <IconButton
        disabled={!hasPrev}
        onClick={onPrev}
        color="primary"
        size={size}
      >
        <NavigateNext fontSize={size} />
      </IconButton>
      {Array.from(
        { length: pages <= frameSize ? pages : frameSize },
        (_, i) => (
          <PaginationButton
            key={i}
            page={pages <= frameSize ? i : calculateIndex(i)}
            currentPage={currentPage}
            size={size}
            onClick={onJump}
          />
        )
      )}

      <IconButton disabled={!hasNext} onClick={onNext} color="primary">
        <NavigateBefore fontSize={size} />
      </IconButton>
      {withFirstLast && (
        <IconButton
          disabled={!hasNext}
          onClick={() => onJump(pages - 1)}
          color="primary"
          size={size}
        >
          <FirstPage fontSize={size} />
        </IconButton>
      )}
    </Stack>
  );
};

export default PaginationToolbar;

interface PaginationButtonProps {
  page: number;
  currentPage: number;
  size?: ButtonProps["size"];
  onClick: (page: number) => void;
}

const PaginationButton = ({
  page,
  currentPage,
  size = "medium",
  onClick,
}: PaginationButtonProps) => {
  return (
    <Button
      sx={{
        userSelect: "none",
        pointerEvents: currentPage === page ? "none" : "auto",
        minWidth: 36,
      }}
      variant={page === currentPage ? "outlined" : "text"}
      size={size}
      onClick={() => onClick(page)}
    >
      {page + 1}
    </Button>
  );
};
