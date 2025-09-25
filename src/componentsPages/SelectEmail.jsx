import React from "react";
import Image from "next/image";

const data = [
    {
        image: "/englishTemplate.svg",
        text: "English",
    },
    {
        image: "/germanTemplate.svg",
        text: "German",
    },
];

export default function SelectEmail() {
    return (
        <div>
            <h1>1. select your email</h1>

            <div>
                <div>
                    <button>EU-wide sanctions</button>
                    <button>Gaza children aid</button>
                </div>

                <div>
                    <h2>preview</h2>

                    <div>
                        {
                            data.map((item, index) => (
                                <div key={index}>
                                    <Image src={item.image} width={100} height={100} alt="templates" />

                                    <p>{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}