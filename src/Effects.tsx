import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [message, setMessage] = useState(-1);
    function callback(message: number) {
        setMessage(message);
    }
    useEffect(() => {
        subscribe(props.sourceId, callback);
        return () => {
            unsubscribe(props.sourceId, callback);
            setMessage(-1);
        };
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {message}
        </div>
    );
}
