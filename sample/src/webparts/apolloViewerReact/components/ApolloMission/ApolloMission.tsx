import * as React from 'react';
import styles from '../ApolloViewerReact/ApolloViewerReact.module.scss';
import { IApolloMissionProps } from './';

export class ApolloMission extends React.Component<IApolloMissionProps, {}> {

  constructor(props: IApolloMissionProps){
    super(props);

    // because our event handler needs access to the component, bind 
    //  the component to the function so it can get access to the
    //  components properties (this.props)... otherwise "this" is undefined
    this._handleOnRemoveClick = this._handleOnRemoveClick.bind(this);
  }


  public render(): React.ReactElement<IApolloMissionProps> {

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td className="ms-textAlignRight"><strong>ID:</strong></td>
              <td>{ this.props.mission.id }</td>
            </tr>
            <tr>
              <td className="ms-textAlignRight"><strong>Name:</strong></td>
              <td>{ this.props.mission.name }</td>
            </tr>
            <tr>
              <td className="ms-textAlignRight"><strong>Date:</strong></td>
              <td>{ this.props.mission.launch_date } - { this.props.mission.end_date }</td>
            </tr>
            <tr>
              <td className="ms-textAlignRight"><strong>Summary:</strong></td>
              <td>{ this.props.mission.summary }</td>
            </tr>
          </tbody>
        </table>
        <a href={ this.props.mission.wiki_href } className={ styles.button }>
          <span className={ styles.label }>Learn more</span>
        </a>
        <a href="#" className={ styles.button } onClick={ this._handleOnRemoveClick }>
          <span className={ styles.label }>Remove Mission</span>
        </a>
      </div>
    );
  }

  /**
   * Handle the click event when user wants to remove a mission.
   * 
   * @private
   * @param {React.MouseEvent<HTMLAnchorElement>} event 
   * @memberof ApolloMission
   */
  private _handleOnRemoveClick(event: React.MouseEvent<HTMLAnchorElement>): void {
    // because we're using a link as a button, make sure it doesn't navigate anywhere
    event.preventDefault();

    // raise the event 'onRemoveMission' and pass the mission to remove
    //  let the upstream components handle what happens
    this.props.onRemoveMission(this.props.mission);
  }
}