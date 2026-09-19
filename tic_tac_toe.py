grid = [[' ' for _ in range(3)] for _ in range(3)]
current_player = 'X'
def print_board():
    for row in grid:
        print('|'.join(row))

def check_winner():
    for i in range(3):
        if grid[i][0] == grid[i][1] == grid[i][2] != ' ':  # Check rows
            return grid[i][0]
        if grid[0][i] == grid[1][i] == grid[2][i] != ' ':  # Check columns
            return grid[0][i]
    if grid[0][0] == grid[1][1] == grid[2][2] != ' ':  # Check diagonal
        return grid[0][0]
    if grid[0][2] == grid[1][1] == grid[2][0] != ' ':  # Check diagonal
        return grid[0][2]
    return None

def check_tie():
    for row in grid:
        if ' ' in row:
            return False  # Game is not a tie
    return True  # Game is a tie
def play_turn(row, col):
    global current_player
    if grid[row][col] == ' ':
        grid[row][col] = current_player
        winner = check_winner()
        tie = check_tie()
        if winner is not None:
            print(f'Player {winner} wins!')
        elif tie:
            print('It is a tie!')
        else:
            current_player = 'O' if current_player == 'X' else 'X'
    else:
        print('Invalid move. Try again.')
def main():
    print('Welcome to Tic-Tac-Toe! Player X goes first.')
    print_board()
    while True:
        row = int(input('Enter row (0-2): '))
        col = int(input('Enter column (0-2): '))
        play_turn(row, col)
        print_board()
        if check_winner() is not None or check_tie():
            break
if __name__ == '__main__':
    main()
