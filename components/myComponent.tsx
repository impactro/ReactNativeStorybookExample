import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

/**
 * This is my component
 * @param props this is my props interface
 */
export const MyComponent = (props: IMyComponent = {
    before: 'clicks ', 
    after: ' times'
}) => {

    const [count, setCount] = useState(0)

    const increment = () => {
        console.log("before: " + count);    
        setCount(count + 1);
    }

    return (
        <View style={{ backgroundColor: 'orange', padding: 20, flexDirection: "row", width: '30%', justifyContent: 'space-around'}}>
            <Button onPress={increment} title="Increment" />
            <Text>{props.before} {count} {props.after}</Text>
        </View>
    )
}

/**
 * I am a interface used in MyComponent's props
 */
export interface IMyComponent {
    /**
     * Label to show before counter
     */
    before: string;
    /**
     * Label to show after counter
     */
    after: string;
}
