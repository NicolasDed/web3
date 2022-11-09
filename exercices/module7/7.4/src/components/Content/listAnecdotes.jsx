import { Link } from "react-router-dom"
import { List, Divider, Typography } from 'antd'

const { Title } = Typography

const ListAnecdotes = ({ anecdotes }) => (
    <>
        <Divider orientation="left">
            <Title level={2}>
                Anecdotes
            </Title>
        </Divider>
        <List
            bordered
            dataSource={anecdotes}
            renderItem={(anecdote) =>
                <List.Item>
                    <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
                </List.Item>
            }
        />
    </>
)

export default ListAnecdotes