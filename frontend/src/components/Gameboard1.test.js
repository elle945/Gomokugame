import React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import axios from 'axios'
import Gameboard from './Gameboard1.jsx'

// Mock axios module
jest.mock('axios')

describe(Gameboard, () => {
    describe('Initial Rendering', () => {
        it('initially renders without game markers', async () => {
            // Mocked response
            const mockGameData = {
                data: {
                    player1: 1,
                    player2: 2,
                    state: { new: true },
                    board: { tiles: [], minInRow: 3 },
                    round: 1
                }
            }

            // Mock axios.get to resolve with the mock data
            axios.get.mockResolvedValue(mockGameData)

            // Render the component
            const { queryByText } = render(<Gameboard />)

            // Kontrollera att "X" och "O" inte visas initialt
            expect(queryByText('X')).toBeNull()
            expect(queryByText('O')).toBeNull()

            await waitFor(() => {
                expect(queryByText('X')).toBeNull()
            })
        })
    })
    describe('Game Updates', () => {
        it('updates with game data and displays markers correctly', async () => {
            const updatedMockGameData = {
          
            }

            axios.get.mockResolvedValue(updatedMockGameData)

            // Render the component
            const { queryAllByText } = render(<Gameboard />)

            // Vänta på att komponenten ska uppdateras
            await waitFor(() => {

            })
        })
    })
})
