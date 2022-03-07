import React, { useState } from "react";
import { Button } from "react-bootstrap";
export function CycleHoliday(): JSX.Element {
    const h: string[] = [
        "Holiday: 🎄",
        "Holiday: 🎃",
        "Holiday: 🇺🇸",
        "Holiday: 🍀",
        "Holiday: 🦃"
    ];
    const [holiday, setholiday] = useState<string>(h[0]);
    const setHolidayByDate = (): void => {
        if (holiday === h[0]) {
            setholiday(h[3]);
        } else if (holiday === h[1]) {
            setholiday(h[4]);
        } else if (holiday === h[2]) {
            setholiday(h[1]);
        } else if (holiday === h[3]) {
            setholiday(h[2]);
        } else if (holiday === h[4]) {
            setholiday(h[0]);
        }
    };
    const setHolidayAlphabetically = (): void => {
        const i = h.indexOf(holiday);
        if (i === 4) {
            setholiday(h[0]);
        } else {
            setholiday(h[i + 1]);
        }
    };
    return (
        <>
            <div>
                <Button onClick={() => setHolidayAlphabetically()}>
                    Advance by Alphabet
                </Button>
            </div>
            <div>
                <Button onClick={() => setHolidayByDate()}>
                    Advance By Year
                </Button>
            </div>
            <div>
                <span>{holiday}</span>
            </div>
        </>
    );
}
