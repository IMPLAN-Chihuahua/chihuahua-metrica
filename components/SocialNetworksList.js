import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';


const SocialNetworksList = ({ socialNetworks }) => {
    const listItems = socialNetworks.map((elem, index) => {
        return (
            <ImageListItem key={index} sx={{backroundColor: 'white'}}>
                <Link href={elem.url} passHref={true}>
                    <a target='_blank' rel='noreferrer'>
                        <Image src={elem.icon} alt={elem.name} height={30} width={30} />
                    </a>
                </Link>
            </ImageListItem >
        )
    });

    return (
        <ImageList sx={{ width: '100px', margin: 'auto' }} cols={3} >
            {listItems}
        </ImageList>
    );
};

export default SocialNetworksList;