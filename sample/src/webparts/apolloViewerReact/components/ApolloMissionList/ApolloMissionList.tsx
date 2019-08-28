import * as React from 'react';
import styles from '../ApolloViewerReact/ApolloViewerReact.module.scss';

import { IMission } from '../../../../models';

import { ApolloMission } from '../ApolloMission';
import { 
  IApolloMissionListProps
} from './';

export class ApolloMissionList extends React.Component<IApolloMissionListProps, {}> {

  public render(): React.ReactElement<IApolloMissionListProps> {

    return (
      <div>
        {
          /* 
           *  for each mission passed into this component,
           *    bind it to the ApolloMission component
           */

          this.props.missions.map(mission => (
            <ApolloMission key={ this._getMissionUniqueId(mission) } 
                           mission={ mission }
                           onRemoveMission={ this.props.onDeleteMission } />
          ))
        }
      </div>
    );
    
  }

  /**
   * Generate a unique ID for the element to help React uniquely identify each element.
   * 
   * @private
   * @param {IMission} mission    The mission to generate the unique ID for.
   * @returns {string}            Unique ID for the mission.
   * @memberof ApolloMissionList
   */
  private _getMissionUniqueId(mission: IMission): string {
    return (`${ mission.id }|${ mission.name.replace(' ','_') }`).toLowerCase();
  }

}