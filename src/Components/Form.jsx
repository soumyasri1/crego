import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import JSONPretty from 'react-json-pretty';
import '../ComponentCSS/Form.css'; // Import custom CSS file

const ExpressionForm = () => {
    const [rules, setRules] = useState([
        { ruleType: 'age', output: { value: '', operator: '>=', score: '' } },
    ]);

    const [combinator, setCombinator] = useState('and');
    const [expressionResult, setExpressionResult] = useState(null);

    const handleAddRule = () => {
        setRules([...rules, { ruleType: 'age', output: { value: '', operator: '>=', score: '' } }]);
    };

    const handleDeleteRule = (index) => {
        const updatedRules = [...rules];
        updatedRules.splice(index, 1);
        setRules(updatedRules);
    };

    const handleChangeRule = (index, field, value) => {
        const updatedRules = [...rules];
        if (field === 'key') {
            updatedRules[index][field] = value;
            updatedRules[index].output = { value: '', operator: '>=', score: '' };
        } else {
         
            updatedRules[index].output[field] = field === 'value' || field === 'score' ? parseFloat(value) : value;
            }
        setRules(updatedRules);
    };

    const handleCombinatorChange = (event) => {
        setCombinator(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const expression = {
            rules,
            combinator,
        };
        setExpressionResult((expression));
    };

    return (
        <div className='main-container' style={{ paddingTop: '46px' }}>
        <Container fluid style={{ paddingTop: '16px' }} className="black-bg"> {/* Apply black background */}
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit} className="black-form"> {/* Apply black form */}
                        <Row className="mb-3">
                            <Col md={12}>
                                <Form.Group controlId="combinator">
                                    <Form.Label className="white-text">Combinator</Form.Label> {/* White text */}
                                    <Form.Control as="select" value={combinator} onChange={handleCombinatorChange} required>
                                        <option value="and">AND</option>
                                        <option value="or">OR</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        {rules.map((rule, index) => (
                            <div key={index} className="mb-3"> {/* Use div for vertical stacking */}
                                <Form.Group controlId={`key-${index}`}>
                                    <Form.Label className="white-text">Rule Type</Form.Label> {/* White text */}
                                    <Form.Control as="select" value={rule.key} onChange={(e) => handleChangeRule(index, 'key', e.target.value)} required>
                                        <option value="age">Age</option>
                                        <option value="creditScore">Credit Score</option>
                                        <option value="accountBalance">Account Balance</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId={`operator-${index}`}>
                                    <Form.Label className="white-text">Operator</Form.Label> {/* White text */}
                                    <Form.Control as="select" value={rule.output.operator} onChange={(e) => handleChangeRule(index, 'operator', e.target.value)} required>
                                        <option value=">">{'>'}</option>
                                        <option value="<">{'<'}</option>
                                        <option value=">=">{'>='}</option>
                                        <option value="<=">{'<='}</option>
                                        <option value="=">{'='}</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId={`value-${index}`}>
                                    <Form.Label className="white-text">Value</Form.Label>
                                    <Form.Control type="text" value={rule.output.value} onChange={(e) => handleChangeRule(index, 'value', e.target.value)} required />
                                </Form.Group>
                                <Form.Group controlId={`score-${index}`}>
                                    <Form.Label className="white-text">Score</Form.Label> 
                                    <Form.Control type="text" value={rule.output.score} onChange={(e) => handleChangeRule(index, 'score', e.target.value)} required/>
                                </Form.Group>
                                <Button  className="Delete" variant="danger" onClick={() => handleDeleteRule(index)}>
                                    Delete
                                </Button>
                            </div>
                        ))}
                        <Button  className="Add"variant="primary" onClick={handleAddRule}>
                            Add Rule
                        </Button>
                        <Button   className="Submit" variant="success" type="submit"  >
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md={6}>
                    {expressionResult && (
                        <div  className="mt-3 Output">
                            <h4 className="white-text result-text">Expression Result:</h4> 
                            <JSONPretty className="white-text result-json"id="json-pretty" data={expressionResult}></JSONPretty>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default ExpressionForm;
