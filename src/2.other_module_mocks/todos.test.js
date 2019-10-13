import axios from 'axios';
import Todos from './todos';

jest.mock('axios');

describe('With other modules as dependencies', () => {
    describe('WRONG way', () => {

    })

    describe('Correct way', () => {
        describe('Get all todos', () => {
            afterEach(() => {
                axios.get.mockReset()
            })

            test('should fetch todos', async () => {
                const expectedTodos = [{id: 1, title: 'My todo', completed: false}]
                const resp = {data: expectedTodos}
                axios.get.mockResolvedValue(resp)
                const receivedTodos = await Todos.all()

                expect(receivedTodos).toEqual(expectedTodos)
                expect(axios.get).toHaveBeenCalledTimes(1)
            })
        })
    })
})
