import ResultBusinessMeters from "../src/Business/Result100MetersBusiness"

const inputMock = {
    competition_name: '100m Rasos' as any,
    athlete_name: 'Eduardo' as any,
    highest_value: '70' as any,
    unity: 's' as any
}

describe('test Result Business', () => {
    test('test result competition invalid input competition name', async () => {
        const input = inputMock
        input.competition_name = ''
        try {
            await ResultBusinessMeters.registerResult100Meters(input)
        } catch (error: any) {
            input.competition_name = '100m Rasos'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input athlete name', async () => {
        const input = inputMock
        input.athlete_name = ''
        try {
            await ResultBusinessMeters.registerResult100Meters(input)
        } catch (error: any) {
            input.athlete_name = 'Eduardo'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input value', async () => {
        const input = inputMock
        input.highest_value = ''
        try {
            await ResultBusinessMeters.registerResult100Meters(input)
        } catch (error: any) {
            input.highest_value = '70'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
    test('test create competition invalid input unity', async () => {
        const input = inputMock
        input.unity = ''
        try {
            await ResultBusinessMeters.registerResult100Meters(input)
        } catch (error: any) {
            input.unity = 's'
            expect(error.message).toEqual('Invalid Parameter')
        } finally {
            expect.assertions(1)
        }
    })
}) 