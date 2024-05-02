'use client';
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import React from "react";
import {Button} from "@/components/ui/button";
import {Heart} from "@/components/heart";
import {StarIcon} from "@/components/icons/star-icon";

export const ProductCard = () => {
    const quantityToPriceMap = new Map([
        ['2ml', '$10.79'],
        ['3ml', '$13.79'],
        ['5ml', '$18.78']
    ]);
    const [quantity, setQuantity] = React.useState(() => '2ml');
    const [price, setPrice] = React.useState(() => quantityToPriceMap.get(quantity));
    const handleQuantitySelect = (quantityValue: string) => {
        console.log({quantityValue})
        setQuantity(quantityValue);
        setPrice(quantityToPriceMap.get(quantityValue));
    };

    return (
       <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
           <CardContent className="flex flex-col gap-4">
               <Image src="/xerjoff.webp" alt="xerjoff" width={400} height={400}/>
               <div>
                   <p className="text-sm text-gray-500">Xerjoff</p>
                   <h3 className="font-bold text-lg">Xerjoff XJ 1861 Naxos Eau de Parfum Unisex</h3>
                   <h4 className="font-semibold text-lg md:text-xl">{price}</h4>
               </div>
               <ToggleGroup type="single" value={quantity} onValueChange={handleQuantitySelect}>
                   <ToggleGroupItem value="2ml" aria-label="2ml">
                       2ml
                   </ToggleGroupItem>
                   <ToggleGroupItem value="3ml" aria-label="3ml">
                       3ml
                   </ToggleGroupItem>
                   <ToggleGroupItem value="5ml" aria-label="5ml">
                       5ml
                   </ToggleGroupItem>
               </ToggleGroup>
               <div className="grid grid-cols-[1fr,32px] gap-x-2 lg:gap-x-6">
                   <Button variant="outline">
                       Add to cart
                   </Button>
                   <div>
                       <Heart/>
                   </div>
               </div>
               <div className="flex items-center justify-between">
                   <div className="flex items-center space-x-2">
                       <div className="flex items-center space-x-0.5">
                           <StarIcon className="h-5 w-5 fill-yellow-300 stroke-yellow-400"/>
                           <StarIcon className="h-5 w-5 fill-yellow-300 stroke-yellow-400"/>
                           <StarIcon className="h-5 w-5 fill-yellow-300 stroke-yellow-400"/>
                           <StarIcon className="h-5 w-5 fill-yellow-300 stroke-yellow-400"/>
                           <StarIcon className="h-5 w-5 fill-muted stroke-slate-400"/>
                       </div>
                       <span className="text-md font-bold">4.2</span>
                   </div>
                   <span className="text-gray-500 dark:text-gray-400">(123 reviews)</span>
               </div>
           </CardContent>
       </Card>
    )
}
