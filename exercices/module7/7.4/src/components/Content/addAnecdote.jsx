import { useNavigate } from 'react-router-dom'
import { Input, Button, Form } from 'antd'

const AddAnecdote = (props) => {
    const navigate = useNavigate()

    const handleSubmit = (values) => {
        props.addNew({
            ...values,
            votes: 0
        })
        navigate('/')
    }

    const handleSubmitFailed = (error) => {
        console.log('error :' + error);
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <Form 
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={handleSubmit}
                onFinishFailed={handleSubmitFailed}
                autoComplete="off"
            >
                <Form.Item
                    label='content'
                    name='content'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your content!',
                        }
                    ]}
                >
                    <Input 
                        placeholder='content'
                        name='content' 
                    />
                </Form.Item>
                <Form.Item
                    label='author'
                    name='author'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your author!',
                        }
                    ]}
                >
                    <Input 
                        placeholder='author'
                        name='author' 
                    />
                </Form.Item>
                <Form.Item
                    label='info'
                    name='info'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your info!',
                        }
                    ]}
                >
                    <Input 
                        placeholder='my site'
                        addonBefore='https://'
                        addonAfter='.com'
                        name='info' 
                    />
                </Form.Item>
                <Button htmlType='submit'>
                    create
                </Button>
            </Form>
        </div>
    )
}

export default AddAnecdote