import __RewireAPI__, {reverseEachWord} from './words'

describe('With dependencies in same module', () => {
    describe('WRONG way', () => {
        test('Test the whole result right away', () => {
            expect(reverseEachWord('I AM WEASEL')).toBe('I MA LESAEW')
        })
    })

    describe('Correct way', () => {
        describe('reverseEachWord - public function', () => {
            let reverseMock = jest.fn()

            beforeAll(() => {
                __RewireAPI__.__set__('reverse', reverseMock)
            })

            beforeEach(() => {
                reverseMock.mockReset()
            })

            afterAll(() => {
                __RewireAPI__.__ResetDependency__('reverse')
            })

            test('calls reverse for each word', () => {
                reverseEachWord('one two three')
                expect(reverseMock).toHaveBeenCalledTimes(3)
            })

            test('does not call if empty string', () => {
                reverseEachWord('')
                expect(reverseMock).toHaveBeenCalledTimes(0)
            })
        })

        describe('reverse - private function', () => {
            const reverse = __RewireAPI__.__get__('reverse')

            test('reverses a word', () => {
                expect(reverse('wat')).toBe('taw')
            })

            test('does nothing with empty string', () => {
                expect(reverse('')).toBe('')
            })
        })
    })
})
