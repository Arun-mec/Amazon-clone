import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import './ProductList.scss'

const images = [
    {
        thumbnail: {
            uri: "https://lorempixel.com/200/200/animals", name: "animals"
        }
    },
    { thumbnail: { uri: "https://lorempixel.com/200/200/city", name: "city" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/city", name: "city" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/city", name: "city" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/city", name: "city" } },
    { thumbnail: { uri: "https://lorempixel.com/200/200/city", name: "city" } },
    {
        thumbnail: { uri: "https://lorempixel.com/200/200/nature", name: "nature" }
    },
    //   { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "cats" } },
    //   { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "cats" } },
    //   { thumbnail: { uri: "https://lorempixel.com/200/200/cats", name: "cats" } }
];

export default function ProductList() {
    return (
        <div className="product-list">
            {/* List title  */}
            <div className="product-list-title">
                <span>Best Sellers in Computers & Accessories</span>
            </div>
            {/* List images  */}
            <div className="product-list-content">
                {images.map((image) => (
                    <img src={image.thumbnail.uri} />
                ))}
            </div>
        </div>
    );
}
