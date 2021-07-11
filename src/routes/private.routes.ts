import { Router } from 'express';
const router = Router();
import passport from 'passport';

router.get('/private', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({message: 'success'});
});

export default router;
