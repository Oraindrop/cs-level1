import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class BaseballGame {
	public static final int THREE = 3;
	public static final int MIN = 100;
	public static final int MAX = 999;
	public static final int NUMBER_ARR_LIST_COUNT = 9;
	
	private List<Integer> numberArrList;
	private List<Integer> answerArrList;
	private List<Integer> challengeArrList;
	private int numberOfStrike;
	private int numberOfball;
	
	public void generateNumberArrList() {
		this.numberArrList = new ArrayList<Integer>();
		for(int i = 0; i < NUMBER_ARR_LIST_COUNT; i++) {
			this.numberArrList.add(i+1);
		}
		return;
	}
	
	public void generateAnswerArrList() {
		this.generateNumberArrList();
		this.answerArrList = new ArrayList<Integer>();
		for(int i = 0; i < THREE; i++) {
			int randomNum = (int)(Math.random() * this.numberArrList.size());
			this.answerArrList.add(this.numberArrList.get(randomNum));
			this.numberArrList.remove(randomNum);
		}
		System.out.println("this.answerArrList : " + this.answerArrList);
		return;
	}
	
	public void goBaseBall() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Please, input Number");
		String input1 = sc.next();
		this.isPossible(input1);
		sc.close();
	}
	
	public void ptichBaseBall(int[] numberArr) {
		this.challengeArrList = new ArrayList<Integer>();
		for(int i = 0; i < THREE; i++) {
			this.challengeArrList.add(numberArr[i]);
		}
		this.judgeBaseBall();
		return;
	}
	
	public void isPossible(String inValue) {
		int[] numberArr = new int[THREE];
		if(this.isValidInteger(inValue) == true) {
			String[] inputArr = inValue.split("");
			for(int i = 0; i < THREE; i++) {
				try {
					int element = Integer.parseInt(inputArr[i]);
					numberArr[i] = element;
				}catch(NumberFormatException e) {
					System.out.println("InputValue is invalid.");
					e.printStackTrace();
				}
			}
			if(this.isDuplication(numberArr) == false) {
				this.ptichBaseBall(numberArr);
				return;
			}
			else {
				this.goBaseBall();
				return;
			}
		}
		this.goBaseBall();
		return;
	}
	
	public boolean isValidInteger(String input1) {
		int checkInteger = 0;
		try {
			checkInteger = Integer.parseInt(input1);
		}catch(NumberFormatException e){
			System.out.println("InputValue is invalid.");
		}
		if(checkInteger < MIN || checkInteger > MAX) {
			System.out.println("InputValue is invalid.");
			return false;
		}
		return true;
	}
	
	public int countArrItem(int[] arr, int value) {
		int count = 0;
		for(int num : arr) {
			if(num == value) {
				count++;
			}
		}
		return count;
	}
	
	public boolean isDuplication(int[] inputArr) {
		for(int element : inputArr) {
			int cnt = this.countArrItem(inputArr, element);
			if(cnt != 1) {
				System.out.println("inputValue is Duplication.");
				return true;
			}
		}
		return false;
	}
	
	public void judgeBaseBall() {
		this.numberOfStrike = 0;
		this.numberOfball = 0;
		for(int i = 0; i < this.answerArrList.size(); i++) {
			if(this.challengeArrList.get(i) == this.answerArrList.get(i)) {
				this.numberOfStrike++;
			}
			else if(answerArrList.contains(this.challengeArrList.get(i))) {				
				this.numberOfball++;
			}
		}
		this.isFinish();
		return;
	}
	
	public void isFinish() {
		if(this.numberOfStrike == THREE) {
			this.finishBaseBall();
			return;
		}
		else {
			this.continueBaseBall();
			return;
		}
	}
	
	public void finishBaseBall() {
		System.out.println("3Strike, 0Ball.");
		System.out.println("3개의 숫자를 모두 맞히셨습니다! 게임종료.");
		return;
	}
	
	public void continueBaseBall() {
		if(this.numberOfStrike == 0 && this.numberOfball == 0) {
			System.out.println("Nothing.");
		}
		else {
			System.out.println(this.numberOfStrike + "Strike, " + this.numberOfball + "ball.");
		}
		this.goBaseBall();
	}
	

	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		BaseballGame bbg = new BaseballGame();
		bbg.generateAnswerArrList();
		bbg.goBaseBall();
	}

}
