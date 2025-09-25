import React from "react";

export default function PrepareEmail() {
    return (
        <div>
            {/* <img src="" alt="" /> */}

            <h2>2. prepare your email</h2>

            <form action="">
                <div>
                    <input type="text" />
                    <label>Name</label>
                </div>

                <div>
                    <input type="text" />
                    <label>Do you need Proton Mail? (optional)</label>
                </div>

                <div>
                    <input type="text" />
                    <label>Email</label>
                </div>

                <button>finalize emails</button>
            </form>
        </div>
    )
}