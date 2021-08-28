import java.util.Scanner;

public class JavaRev2 {
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
      String correctFlag = "gmbh|ui26`1o4`tI1v2e`c4`C4uU4S~";
      String x = "";
      for (int i = 0; i < input.length(); i++) {
         x += (char) ((int) input.charAt(i) + 1);
      }
      return x.equals(correctFlag);
   }
}