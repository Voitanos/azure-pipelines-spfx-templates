import { 
  IMission,
  MissionOperationCallback
} from "../../../../models";

export interface IApolloMissionListProps {
  missions?: IMission[];
  onDeleteMission?: MissionOperationCallback;
}
