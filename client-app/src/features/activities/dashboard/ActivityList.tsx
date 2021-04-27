import React from 'react';
import { Button, Item, Label, List, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props{
    activities : Activity[];
    selectActivity: (id: string) => void;
}
//usando Destructure
export default function ActivityList({activities, selectActivity}: Props){
    return(
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                <Item key={activity.id}>
                    <Item.Content>
                        <Item.Header>{activity.title}</Item.Header>
                        <Item.Meta>{activity.date}</Item.Meta>
                        <Item.Description>
                            <div>{activity.description}</div>
                            <div>{activity.venue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={()=>selectActivity(activity.id)} floated='right' content='View' color='blue'/>
                            <Label basic content={activity.category}/>
                        </Item.Extra>
                    </Item.Content>
                </Item>
                ))}
            </Item.Group>
        </Segment>
    )

}