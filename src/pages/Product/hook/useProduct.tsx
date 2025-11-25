import { products } from "@/assets/Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import thumbnail1 from "@/assets/thumbnailgallery/thumbnail1.jpg";
import thumbnail2 from "@/assets/thumbnailgallery/thumbnail2.jpg";
import thumbnail3 from "@/assets/thumbnailgallery/thumbnail3.jpg";
import type { ProductType } from "@/types/types";

export function useProduct() {

    // Product Data
    const { productName } = useParams();
    const product: ProductType | undefined = products.find((p) => p.name === productName);
    const thumbnails = [product?.image, thumbnail1, thumbnail2, thumbnail3]
    const related = products
        .filter((p) => p.name !== productName && p.type === "plant")
        .slice(0, 6);
    const fixedVasePrice = 20;

    // UI state
    const [selectedImage, setSelectedImage] = useState<string | undefined>("");
    const [selectedRadio, setSelectedRadio] = useState<"without" | "with">("without");
    const [quantity, setQuantity] = useState<number>(0);
    const [activeTab, setActiveTab] = useState<"care" | "description" | "shipping">("care");

    // Reseting the states when the prosuctname changes 
    useEffect(() => { //note2
        if (!product) return; //note 1
        setSelectedImage(product.image);
        setSelectedRadio("without");
        setQuantity(0);
        setActiveTab("care");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [productName]);

    return { product, thumbnails, related, fixedVasePrice, selectedImage, setSelectedImage, selectedRadio, setSelectedRadio, quantity, setQuantity, activeTab, setActiveTab };
}



// notes
// note1: //this lines ensures that when the product doesnt exists the rest of the code in the hook dont run
// because changing from a productname x to undefined is also a change and runs the hook anyway but undefined oesnt have those properties to reset

// note2:Destructuring only grabs what’s returned,
// but calling the hook executes everything inside it — including useEffect.
// That’s why your useEffect still works even though you never “mention” it in the destructuring.


// improvements
//use memo might be useful here to optimize performance but not necessary at the moment