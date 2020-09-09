import React from 'react';
import { Text, View, Button } from 'react-native';
import { action } from '@storybook/addon-actions';
import { withLinks } from '@storybook/addon-links';
import { storiesOf, addDecorator } from '@storybook/react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { number, color, text, boolean, date } from '@storybook/addon-knobs';
import { MyComponent } from '../myComponent';

addDecorator(withKnobs)
addDecorator(withBackgrounds);

storiesOf('Simple Components', module)
  .addParameters({
    component: MyComponent,
  })
  .add('Counter Component', () => <MyComponent />)
  .add('Commom Button', () => <Button title="click this" action='click' />);

storiesOf('Add on', module)
  .addParameters({
    notes: `
# Documentation!\n
## Sub title\n
List\n
* 1\n
* 22\n
* 333`,
    backgrounds: [
      { name: 'dark', value: '#222222' },
      { name: 'light', value: '#eeeeee', default: true },
      { name: 'gray', value: '#888888' }]
  })
  .add('Dynamic Configuring', () => {

    const vText = text('Text', "text value", "Values")
    const vNumber = number('Number', 100, {}, "Values")

    const vSize = number('Size', 50, { min: 10, max: 200, step: 10, range: true }, "Controls")
    const vMargin = boolean("Margin", false, "Controls")
    const vColor = color("Background", "yellow", "Controls");
    const vDate = date("Date", new Date(), "Controls");

    return <View style={{ backgroundColor: vColor, margin: vMargin ? '10%':0, width: '80%', height: '80%' } }>
      <Text style={{ fontSize: vSize }}>{ vText + "\nNumber: " + vNumber + "\n" + new Date(vDate).toString()}</Text>
    </View>

  });
