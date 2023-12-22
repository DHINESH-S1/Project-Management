import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Container,
  List,
  ListItem,
  Paper,
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

const ProjectAssignment = () => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    teamMembers: [],
  });

  const [newAssignment, setNewAssignment] = useState({
    task: '',
    assignedTo: '',
  });

  const handleProjectChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleAssignmentChange = (e) => {
    setNewAssignment({
      ...newAssignment,
      [e.target.name]: e.target.value,
    });
  };

  const assignTask = () => {
    const updatedProject = {
      ...project,
      teamMembers: [
        ...project.teamMembers,
        {
          task: newAssignment.task,
          assignedTo: newAssignment.assignedTo,
        },
      ],
    };
    setProject(updatedProject);
    setNewAssignment({
      task: '',
      assignedTo: '',
    });
  };

  return (
    <Container maxWidth="md" style={{ background: '#f5f5f5', padding: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Project Assignment
        </Typography>

        <div className="project-form">
          <TextField
            label="Project Title"
            fullWidth
            margin="normal"
            name="title"
            value={project.title}
            onChange={handleProjectChange}
          />
          <TextField
            label="Project Description"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            name="description"
            value={project.description}
            onChange={handleProjectChange}
          />

          <Typography variant="h6" gutterBottom>
            Assign Tasks
          </Typography>
          <TextField
            label="Task"
            fullWidth
            margin="normal"
            name="task"
            value={newAssignment.task}
            onChange={handleAssignmentChange}
          />
          <TextField
            label="Assign to"
            fullWidth
            margin="normal"
            name="assignedTo"
            value={newAssignment.assignedTo}
            onChange={handleAssignmentChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={assignTask}
            startIcon={<AssignmentIcon />}
            style={{ marginTop: '16px' }}
          >
            Assign Task
          </Button>

          <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
            Project Details
          </Typography>
          <Typography variant="body1">
            <strong>Title:</strong> {project.title}
          </Typography>
          <Typography variant="body1">
            <strong>Description:</strong> {project.description}
          </Typography>

          <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
            Assigned Tasks
          </Typography>
          <List>
            {project.teamMembers.map((assignment, index) => (
              <ListItem key={index}>
                <Typography variant="body1">
                  <strong>{assignment.task}</strong> - Assigned to:{' '}
                  {assignment.assignedTo}
                </Typography>
              </ListItem>
            ))}
          </List>
        </div>
      </Paper>
    </Container>
  );
};

export default ProjectAssignment;
