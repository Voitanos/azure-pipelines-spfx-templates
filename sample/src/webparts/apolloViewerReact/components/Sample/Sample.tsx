import * as React from 'react';

export interface ISampleProps { }

export class Sample extends React.Component<ISampleProps, {}> {
  public render(): React.ReactElement<ISampleProps> {

    return (
      <div>
        <span>Hello world:</span>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </div>
    );
  }
}