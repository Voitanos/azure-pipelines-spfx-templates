import { 
  IMission,
  MissionOperationCallback
} from "../../../../models";

export interface IApolloMissionProps {
  mission?: IMission;
  onRemoveMission?: MissionOperationCallback;
}
