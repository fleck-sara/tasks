import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [editmode, seteditmode] = useState<boolean>(false);
    const [name, setname] = useState<string>("Your name");
    const [isstudent, setisstudent] = useState<boolean>(true);
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        seteditmode(event.target.checked);
    }
    function updateName(event: ChangeEvent) {
        setname(event.target.value);
    }
    function updateisstudent(event: React.ChangeEvent<HTMLInputElement>) {
        setisstudent(event.target.checked);
    }

    return (
        <>
            <div>
                <h3>Edit Mode</h3>
            </div>
            <div>
                <Form.Check
                    type="switch"
                    id="edit mode"
                    label="Edit Mode:"
                    checked={editmode}
                    onChange={updateMode}
                />
            </div>
            <div>
                {name} {isstudent ? " is a student" : " is not a student"}.
            </div>
            {editmode ? (
                <>
                    <div>
                        <Form.Group controlId="formEditName">
                            <Form.Label>What is your name?</Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                        </Form.Group>
                    </div>{" "}
                    <div>
                        <Form.Check
                            type="checkbox"
                            id="is-student"
                            label="Are you a student?"
                            checked={isstudent}
                            onChange={updateisstudent}
                        />
                    </div>
                </>
            ) : (
                <span></span>
            )}
        </>
    );
}
