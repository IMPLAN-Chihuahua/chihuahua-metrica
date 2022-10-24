import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material"
import { Box, IconButton } from "@mui/material";
import NextLink from 'next/link';

const NavBackAndFoward = ({ prev, next }) => {
  return (
    <Box minWidth='fit-content' sx={{ display: 'flex', columnGap: 1 }}>
      <NextLink href={prev.link} passHref>
        <a href={prev.link} style={{ pointerEvents: prev.disabled ? 'none' : undefined }}>
          <NavButton
            link={prev.link}
            title={prev.title}
            disabled={prev.disabled}
            icon={<ArrowBackIosNew />}
            onClick={prev?.onClick}
          />
        </a>
      </NextLink>
      <NextLink href={next.link} passHref>
        <a href={next.link} style={{ pointerEvents: next.disabled ? 'none' : undefined }}>
          <NavButton
            title={next.title}
            disabled={next.disabled}
            icon={<ArrowForwardIos />}
            onClick={next?.onClick}
          />
        </a>
      </NextLink>
    </Box >
  )
};

const NavButton = ({ title, disabled, icon, link, onClick = null }) => {
  const handleClick = () => {
    if (typeof onClick === 'function' && !disabled && onClick !== null) {
      onClick();
    }
  }
  return (
    <span style={{ cursor: disabled ? 'not-allowed' : 'default' }}>
      <IconButton
        sx={{ border: '1px solid lightgray' }}
        title={title || 'NA'}
        disabled={disabled}
        onClick={handleClick}
      >
        {icon}
      </IconButton>
    </span>
  )
}

export default NavBackAndFoward;