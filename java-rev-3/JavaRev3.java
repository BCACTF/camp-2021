import java.util.Arrays;
import java.util.Scanner;

public class JavaRev3 {
   public static void main(String[] args) {
      System.out.println("Enter the password: ");
      Scanner scanner = new Scanner(System.in);
      if (checkPassword(scanner.nextLine())) {
         System.out.println("That's the right password!");
      } else {
         System.out.println("Nope");
      }
   }

   public static boolean checkPassword(String input) {
      int[] correctPassword = { 110, 116, 105, 111, 131, 61, 125, 88, 59, 122, 103, 61, 59, 75, 125, 90, 59, 103, 120,
            60, 61, 61, 127, 56, 122, 76, 103, 107, 80, 59, 107, 83, 59, 90, 133 };
      int[] inputArr = new int[input.length()];
      for (int i = 0; i < input.length(); i++) {
         inputArr[i] = input.charAt(i) + (2 * 3 + 2);
      }
      return Arrays.equals(correctPassword, inputArr);
   }
}