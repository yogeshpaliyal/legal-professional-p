import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DisclaimerProps {
  open: boolean
  onAgree: () => void
  onDecline: () => void
}

export function Disclaimer({ open, onAgree, onDecline }: DisclaimerProps) {
  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">Disclaimer</DialogTitle>
          <DialogDescription className="text-base leading-relaxed space-y-4 text-foreground">
            <p>By clicking "Agree" below or by accessing this website, the user confirms and acknowledges that:</p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>
                There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from Ghuman Advocates or any of its members or personnel to solicit any work or advertise through this website;
              </li>
              <li>
                The purpose of this website is to provide the user with basic information about Ghuman Advocates and its practice areas;
              </li>
              <li>
                The information about Ghuman Advocates is provided to the user only at the user's specific request and any use of this website will not create any lawyer-client relationship;
              </li>
              <li>
                Ghuman Advocates are not liable for any consequence of any action taken by the user relying on material/ information provided on this website. The contents hereof should not be construed as legal advice in any manner whatsoever. In cases where the user requires any assistance, the user must seek independent legal advice.
              </li>
            </ul>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-4 sm:gap-4">
          <Button 
            variant="outline" 
            onClick={onDecline}
            className="flex-1"
          >
            Decline
          </Button>
          <Button 
            onClick={onAgree}
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Agree
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
