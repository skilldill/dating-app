import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import { Profile } from "../../../../shared/models";

interface GalleryPhotoProps {
    alt: string,
    photo: string
}

const GalleryPhoto: React.FC<GalleryPhotoProps> = (props) => {
    return (
        <div className="gallery-photo">
            <img src={props.photo} alt={props.alt} />
        </div>
    )
}

export const Gallery = () => {
    const { gallery }: Profile = useSelector((state: any) => state.profile);
    
    // TODO: Надо учитывать что фоток может и не быть
    const galleryLength = gallery?.length;

    const renderPhotos = () => {
        if (!!gallery && !!gallery.length) {
            return (
                <>
                    {
                        gallery.map((photo: string, i: number) => 
                            <GalleryPhoto 
                                photo={photo}
                                alt={i.toString()}
                                key={i}
                            />
                        )
                    }
                </>
            )
        }

        // TODO: нужно показывать что фоток нет
        return null;
    }

    return (
        <div className="gallery">
            <div className="galley-header">
                <h3>Фото ({galleryLength}):</h3>
            </div>
            <div className="gallery-body">
                { renderPhotos() }
            </div>
        </div>
    )
}