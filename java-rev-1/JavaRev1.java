import java.util.Scanner;

public class JavaRev1 {
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
      return input.equals("flag{h0p3fU11y_n0_0n3_r34d5_tH15}");
   }
}