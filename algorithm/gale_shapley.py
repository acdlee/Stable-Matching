class GaleShapley:
    def match(self, M, W, m_pref, w_pref):
        # engagement arrays
        # m_match[0]: the index of the first man's fiance or 0 (has not proposed ie free)
        m_match = [0 for i in range(len(M))]
        w_match = [0 for i in range(len(W))]
        
        # proposal arrays
        # w_proposals[0][0]: a boolean value representing if the first man has proposed to the first woman
        m_proposals = [[False for i in range(len(W))] for i in range(len(M))]
        # w_proposals = [[False for i in range(len(M))] for i in range(len(W))]
        
        # our bachelor
        bachelor = 0
        # i = 0
        while bachelor != None:
            # print(bachelor, i)
            # i += 1
            # choose the highest rated woman (according to our bachelor) whom our bachelor has not proposed to
            bachelorette = None
            for potential_fiance in m_pref[bachelor]:
                if not m_proposals[bachelor][potential_fiance - 1]:
                    # if our bachelor hasn't proposed to contestant number potential_fiance, take a knee
                    bachelorette = potential_fiance - 1
                    # record the proposal
                    m_proposals[bachelor][bachelorette] = True
                    # exit loop once we found a potential bachelorette
                    break
            
            # let's see what the bachelorette thinks of this proposal
            if not w_match[bachelorette]:
                # two free birds, let's link'em up
                # Note: ensure the values in m/w_match correspond to the values in m/w_pref (hence +1)
                m_match[bachelor] = bachelorette + 1
                w_match[bachelorette] = bachelor + 1
            else:
                # uh oh, the bachelorette gets a say
                the_other_man = w_match[bachelorette]
                # who does our bachelorette prefer?
                if w_pref[bachelorette].index(the_other_man) < w_pref[bachelorette].index(bachelor + 1):
                    # try, try again
                    continue
                else:
                    # it's a cruel world
                    # Note: ensure the values in m/w_match correspond to the values in m/w_pref (hence +1)
                    m_match[bachelor] = bachelorette + 1
                    w_match[bachelorette] = bachelor + 1
                    m_match[the_other_man - 1] = 0
            
            # The Bachelor needs another season!
            if 0 in m_match:
                bachelor = m_match.index(0)
            else:
                # ... on second thought
                bachelor = None
                
        # Create the set of matches
        stable_matches = list()
        for i in range(len(m_match)):
            match = (i + 1, m_match[i])
            stable_matches.append(match)
        
        return stable_matches