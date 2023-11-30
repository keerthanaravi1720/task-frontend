

import React, { useState, useEffect } from 'react';
import { Calendar, Modal, Form, Input, Button, Card, Row, Col, Tooltip } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import moment from 'moment';
import './c.css';
// import Navbar from '../component/Navbar';
import Sidebar from '../component/Navbar';

const initialEventsData = {
  '2023-07-20': [{ title: 'Meeting 1', description: 'Discuss project details' }],
  '2023-07-25': [
    { title: 'Meeting 2', description: 'Review progress' },
    { title: 'Lunch', description: 'Team lunch outing'},
  ],
};

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [eventForm] = Form.useForm();
  const [eventsData, setEventsData] = useState(initialEventsData);

  useEffect(() => {
    // Load events from localStorage on initial mount
    const storedEventsData = localStorage.getItem('eventsData');
    if (storedEventsData) {
      setEventsData(JSON.parse(storedEventsData));
    }
  }, []);

  useEffect(() => {
    // Save events to localStorage whenever the eventsData state changes
    localStorage.setItem('eventsData', JSON.stringify(eventsData));
  }, [eventsData]);

  const onDateClick = (date) => {
    setSelectedDate(date.format('YYYY-MM-DD'));
    setModalVisible(true);
  };
 
  

  // const onModalClose = () => {
  //   setSelectedDate(null);
  //   setModalVisible(false);
  //   eventForm.resetFields(); // Reset the form when the modal is closed
  // };
  // const onModalClose = () => {
  //   setSelectedDate(null);
  //   eventForm.resetFields(); // Reset the form when the modal is closed
  
  //   // Check if there are any events for the selected date, if not, hide the modal
  //   if (selectedDate && (!eventsData[selectedDate] || eventsData[selectedDate].length === 0)) {
  //     setModalVisible(false);
  //   }
  // };

  const onModalClose = () => {
    setSelectedDate(null);
    eventForm.resetFields(); // Reset the form when the modal is closed
  
    // Check if there are any events for the selected date, if not, hide the modal
    if (selectedDate && (!eventsData[selectedDate] || eventsData[selectedDate].length === 0)) {
      setModalVisible(false);
    }
  };
  
  

  const onFinish = (values) => {
    const { title, description } = values;
    const newEvent = { title, description };
    const eventsForSelectedDate = eventsData[selectedDate] || [];
    setEventsData({
      ...eventsData,
      [selectedDate]: [...eventsForSelectedDate, newEvent],
    });
    setModalVisible(false);
    eventForm.resetFields(); // Reset the form after submitting
  };

  
  const handleDeleteEvent = (eventIndex) => {
    if (!eventsData[selectedDate]) return; // Check if eventsData[selectedDate] exists
    const updatedEvents = [...eventsData[selectedDate]];
    updatedEvents.splice(eventIndex, 1);
  
    setEventsData({
      ...eventsData,
      [selectedDate]: updatedEvents,
    });
  
    // Check if there are any events left for the selected date, if not, hide the modal
    if (updatedEvents.length === 0) {
      setModalVisible(false);
    }
  };
  
  const handleDeleteCard = (date) => {
    const updatedEventsData = { ...eventsData };
    delete updatedEventsData[date];
  
    setEventsData(updatedEventsData);
  
    // Check if the deleted card was for the selected date, if yes, hide the modal
    if (selectedDate === date) {
      setModalVisible(false);
    }
  };
  
  


  return (
    <div className="main-container">
      <Sidebar />
      <div className="table-container"> 
        <h1>Calendar</h1>
        <Calendar onSelect={onDateClick} />
        <Row gutter={[16, 16]}>
          {Object.entries(eventsData).map(([date, events], index) => (
            <Col key={date} span={5}>
              <Card
                className="custom-card"
                title={moment(date).format('MMM Do, YYYY')}
                size="small"
                style={{
                  cursor: 'pointer',
                  transform: 'scale(1)',
                  transition: 'transform 0.2s',
                  width: '200px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
                onClick={() => onDateClick(moment(date))}
              >
                {events && events.length > 0 ? (
                  events.map((event, eventIndex) => (
                    <div key={eventIndex} style={{ display: 'flex', alignItems: 'center' }}>
                      <h4>{event.title}</h4>
                      <p>{event.description}</p>
                      <Tooltip title="Delete Event">
                        <Button
                          type="text"
                          onClick={() => handleDeleteEvent(eventIndex)}
                          style={{ marginLeft: 'auto' }}
                          icon={<CloseOutlined style={{ color: '#ff4d4f' }} />}
                        />
                      </Tooltip>
                    </div>
                  ))
                ) : (
                  <p>No events for this date.</p>
                )}
                <Tooltip title="Close Card">
                  <Button
                    type="text"
                    onClick={() => handleDeleteCard(date)}
                    style={{ position: 'absolute', top: 8, right: 8 }}
                    icon={<CloseOutlined style={{ color: '#ff4d4f' }} />}
                  />
                </Tooltip>
              </Card>
            </Col>
          ))}
        </Row>
        <Modal
          title={`Events on ${moment(selectedDate).format('MMM Do, YYYY')}`}
          visible={modalVisible}
          onCancel={onModalClose}
          footer={null}
        >
          {selectedDate && eventsData[selectedDate] && eventsData[selectedDate].length > 0 ? (
            eventsData[selectedDate].map((event, index) => (
              <div key={index}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            ))
          ) : (
            <p>No events for this date.</p>
          )}
          <Form form={eventForm} onFinish={onFinish}>
            <Form.Item name="title" label="Event Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Event Description"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button style={{ padding: '3px', backgroundColor: 'wheat', color: 'black' }} htmlType="submit">
                Add Event
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default CalendarPage;
