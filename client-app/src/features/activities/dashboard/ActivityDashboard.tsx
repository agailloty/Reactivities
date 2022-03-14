import React from 'react';
import { Container, Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/Activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id:string) => void;
    closeForm: () => void;
}

export default function ActivityDashboard({ activities, selectedActivity, selectActivity,
    cancelSelectActivity, editMode, openForm, closeForm}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails
                    activity={selectedActivity}
                    cancelSelectActivity={cancelSelectActivity}
                    openForm = {openForm}

                />
                }
                {editMode &&
                    <ActivityForm activity={selectedActivity} closeForm={closeForm} />}
            </Grid.Column>
        </Grid>
    )
}